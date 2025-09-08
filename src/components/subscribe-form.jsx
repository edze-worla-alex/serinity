"use client"

import React from 'react'

function SubscribeForm() {
  return (
    <div>
        <form
                className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto md:max-w-none"
                aria-label="Newsletter subscription"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-[#C8A882]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A882] focus:ring-2 focus:ring-[#C8A882] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C8A882] text-white rounded-lg hover:bg-[#FF5C8D] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C8A882] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
                >
                  Subscribe
                </button>
              </form>
    </div>
  )
}

export default SubscribeForm