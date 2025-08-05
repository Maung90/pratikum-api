<x-app-layout>
    @section('extra-css')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    @endsection
    <br>
    <div class="mt-5 mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div class="bg-white shadow rounded-lg p-6">
            <div class="flex align-center justify-between">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Daftar Pengguna</h2>
                <div>
                    <button class="rounded p-2 text-xs cursor-pointer"  style="background-color:#37FD78;">Add User</button>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table id="users-table" class="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-4 py-3 text-left font-medium">#</th>
                            <th class="px-4 py-3 text-left font-medium">Nama</th>
                            <th class="px-4 py-3 text-left font-medium">Email</th>
                            <th class="px-4 py-3 text-left font-medium">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-100"></tbody>
                </table>
            </div>
        </div>
    </div> 
    @section('extra-js')
    <script>
        $(document).ready(function () {
            $('#users-table').DataTable({
                ajax: {
                    url: '{{ $apiUrl }}',
                    dataSrc: ''
                },
                columns: [
                    { data: 'id' },
                    { data: 'name' },
                    { data: 'email' },
                    {
                        data: null,
                        render: function (data, type, row) {
                            return `
                                <div class="flex space-x-2 gap-2">
                                    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Edit</a>
                                    <button onclick="deleteUser(${row.id})" class="text-white px-3 py-1 rounded text-xs cursor-pointer" style="background-color:red;">Hapus</button>
                                </div>
                            `;
                        }
                    }
                ]
            });
        });

        function deleteUser(id) {
            if (confirm('Yakin ingin menghapus user ini?')) { 
                fetch(`{{ $apiUrl }}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    console.log(response)
                   {{--  if (response.ok) {
                        $('#users-table').DataTable().ajax.reload();
                    } else {
                        alert('Gagal menghapus user.');
                    } --}}
                });
            }
        }
    </script>
    @endsection
</x-app-layout>
