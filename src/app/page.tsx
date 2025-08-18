"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          
          {/* Main Hello World Section */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Hello World!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              Welcome to your first Next.js 15 application with shadcn/ui components and Tailwind CSS.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Next.js 15
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built with the latest App Router and React 19 features
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Modern utility-first CSS framework with shadcn/ui components
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                TypeScript
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Type-safe development with full TypeScript support
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="space-y-4">
            <button 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              onClick={() => alert('Hello from your Next.js app!')}
            >
              Click me to say hello!
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with ❤️ using modern web technologies
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}