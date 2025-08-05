<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="text-center space-y-8">
        <h1 class="text-4xl font-bold text-gray-800">Welcome to the Dashboard</h1>

        <div class="flex justify-center gap-6">
            <a href="{{route('users.index')}}" class="px-6 py-3 bg-dark rounded-xl text-white transition" style="background-color: #F91111;">User</a>
            <a href="{{route('products.index')}}" class="px-6 py-3 bg-dark rounded-xl text-white transition" style="background-color: #082CE1;">Product</a>
            <a href="{{route('transactions.index')}}" class="px-6 py-3 bg-dark rounded-xl text-white transition" style="background-color: #11EB06;">Transactions</a>
        </div>
    </div>
</body>
</html>
