<nav x-data="{ open: false }" class="bg-blue-500 border-b border-gray-200 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <!-- Logo -->
            <div class="flex items-center">
                <a href="/" class="text-2xl font-extrabold text-blue-600 tracking-wide text-white">
                    MyApp
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden sm:flex space-x-6 gap-4">
                <a href="/users" class=" text-white hover:text-blue-600 font-semibold transition">Users</a>
                <a href="/products" class=" text-white hover:text-blue-600 font-semibold transition">Products</a>
                <a href="/transactions" class=" text-white hover:text-blue-600 font-semibold transition">Transactions</a>
            </div>

            <!-- Mobile Hamburger -->
            <div class="sm:hidden">
                <button @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none transition">
                    <svg x-show="!open" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg x-show="open" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div x-show="open" x-transition class="sm:hidden px-4 pt-5 pb-6 space-y-2 bg-blue-500 shadow-inner  border-gray-100">
        <a href="/users" class="block  text-white hover:text-blue-600 font-semibold transition py-4">Users</a>
        <a href="/products" class="block  text-white hover:text-blue-600 font-semibold transition py-4">Products</a>
        <a href="/transactions" class="block  text-white hover:text-blue-600 font-semibold transition py-4">Transactions</a>
    </div>
</nav>
