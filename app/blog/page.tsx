import Image from "next/image"
import Link from "next/link"
import { Leaf, Calendar, User, ArrowRight } from "lucide-react"

export default function Blog() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Trees to Plant in Indian Climate",
      excerpt:
        "Discover the best native tree species that thrive in India's diverse climate zones, from the Himalayan regions to coastal areas.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-12-10",
      author: "Dr. Rajesh Kumar",
      category: "Tree Species",
      slug: "top-trees-india",
    },
    {
      id: 2,
      title: "How Tree Planting Supports Local Communities",
      excerpt:
        "Learn how our plantation projects create jobs, improve local ecosystems, and support rural livelihoods across India.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-11-25",
      author: "Priya Sharma",
      category: "Community Impact",
      slug: "community-impact",
    },
    {
      id: 3,
      title: "Trees and SDGs: Making a Difference",
      excerpt:
        "Explore how tree plantation contributes to multiple Sustainable Development Goals, from climate action to poverty reduction.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-11-15",
      author: "Amit Patel",
      category: "Sustainability",
      slug: "trees-and-sdgs",
    },
    {
      id: 4,
      title: "The Magic of Neem: India's Miracle Tree",
      excerpt:
        "Discover the incredible benefits of the Neem tree, from medicinal properties to its role in sustainable agriculture.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-10-30",
      author: "Dr. Meena Gupta",
      category: "Tree Species",
      slug: "neem-tree-benefits",
    },
    {
      id: 5,
      title: "Urban Forests: Greening India's Cities",
      excerpt:
        "How urban forestry initiatives are transforming India's concrete jungles into green, sustainable cities for the future.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-10-15",
      author: "Vikram Singh",
      category: "Urban Forestry",
      slug: "urban-forests-india",
    },
    {
      id: 6,
      title: "Monsoon Planting Guide: Best Practices",
      excerpt:
        "A comprehensive guide to planting trees during India's monsoon season for maximum survival and growth rates.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-09-20",
      author: "Anjali Desai",
      category: "Planting Guides",
      slug: "monsoon-planting-guide",
    },
  ]

  // Categories
  const categories = [
    "All Categories",
    "Tree Species",
    "Community Impact",
    "Sustainability",
    "Urban Forestry",
    "Planting Guides",
    "Success Stories",
  ]

  // Featured post (first post)
  const featuredPost = blogPosts[0]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-green-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">TreePlantation</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-green-800 hover:text-green-600 font-medium">
              About
            </Link>
            <Link href="/blog" className="text-green-800 hover:text-green-600 font-medium">
              Blog
            </Link>
            <Link href="/sdgs" className="text-green-800 hover:text-green-600 font-medium">
              SDGs
            </Link>
            <Link href="/contact" className="text-green-800 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Blog Header */}
        <section className="bg-green-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-green-800 mb-4">Our Blog</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Discover insights about tree plantation, sustainable practices, and how we're making India greener.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
                    {featuredPost.category}
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="block mt-1 text-2xl leading-tight font-bold text-green-800 hover:underline"
                  >
                    {featuredPost.title}
                  </Link>
                  <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={featuredPost.date}>
                          {new Date(featuredPost.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-6 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0 ? "bg-green-600 text-white" : "bg-white text-green-800 hover:bg-green-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-green-600 uppercase tracking-wide">{post.category}</div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block mt-2 text-xl font-semibold text-green-800 hover:underline"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-3 text-gray-600">{post.excerpt}</p>
                    <div className="mt-4 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <User className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <div className="flex space-x-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-green-600 hover:text-green-800 font-medium flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-8 text-green-100">
              Stay updated with our latest tree plantation initiatives, events, and educational content.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs mt-2 text-green-200">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-300" />
                <span className="text-xl font-bold text-white">TreePlantation</span>
              </div>
              <p className="text-green-200">Making India greener, one tree at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-green-200 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-green-200 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-green-200 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/sdgs" className="text-green-200 hover:text-white">
                    SDGs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-green-200 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/donate" className="text-green-200 hover:text-white">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="text-green-200 hover:text-white">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/corporate" className="text-green-200 hover:text-white">
                    Corporate Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-green-200 hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-green-200 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
            <p>© {new Date().getFullYear()} TreePlantation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

