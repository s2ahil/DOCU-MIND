'use client'

import { motion } from 'framer-motion'

import Link from 'next/link'
export const Feature = () => {
  return (
    <div id="feature" className="flex flex-col items-center gap-y-8 p-8">
      <div className="badge relative overflow-hidden">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary-color-light-500)_0%,var(--primary-color)_50%,var(--primary-color-light-500)_100%)]" />
        <div className="z-50 text-white">HOW IT WORKS</div>
      </div>
      <h2 className="text-center !my-0">
        Easily Chat with one click
        {' '}
     
      </h2>
      <div className="gap-y-4">
        <div className="flex flex-wrap items-center justify-between p-8 w-full">
          <div className="w-full lg:w-[55%]">
            <div className="badge relative overflow-hidden">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary-color-light-500)_0%,var(--primary-color)_50%,var(--primary-color-light-500)_100%)]" />
              <div className="z-50 text-white">Step 1</div>
            </div>
            <h3 className="!mt-4">Upload PDF to the uploader 📙✅</h3>
            <p className="text-gray-500 !font-light">
              Always include .pdf files 
            </p>
            <Link href="chat-with-docs">
            <button className="btn btn-wide bg-gradient-to-tl from-primary to-secondary text-white" href="#">Start for free</button>
            </Link>
          </div>
          <div className="w-full mt-6 lg:mt-0 lg:w-[40%]">
            <div className="card shadow-xl">
              <div className="absolute top-0 flex w-full justify-center">
                <motion.div
                  className="h-[4px] rounded-full bg-gradient-to-r from-primary via-white to-primary"
                  initial="initial"
                  animate="final"
                  transition={{
                    duration: 3,
                    // eslint-disable-next-line unicorn/prefer-number-properties
                    repeat: Infinity,
                  }}
                  variants={{
                    initial: {
                      width: '10px',
                      opacity: '0',
                    },
                    final: {
                      width: '100%',
                      opacity: '1',
                    },
                  }}
                />
              </div>
              <figure className="rounded-md border-4 border-primary-500"><img className="w-full" src="https://github.com/s2ahil/TALK2DOCS/assets/101473078/da06acaa-c496-40c8-ba10-c62750f424b8" alt="" /></figure>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between p-8 w-full">
          <div className="w-full lg:w-[55%] lg:order-1">
            <div className="badge relative overflow-hidden">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary-color-light-500)_0%,var(--primary-color)_50%,var(--primary-color-light-500)_100%)]" />
              <div className="z-50 text-white">Step 2</div>
            </div>
            <h3 className="!mt-4">Click on Submit 👆</h3>
            <p className="text-gray-500">
            Click On submit for sending your pdf 
            </p>
            <Link href="chat-with-docs">
            <button className="btn btn-wide bg-gradient-to-tl from-primary to-secondary text-white" href="#">Start for free</button>
            </Link>
          </div>
          <div className="w-full mt-6 lg:mt-0 lg:w-[40%]">
            <div className="card shadow-xl">
              <div className="absolute top-0 flex w-full justify-center">
                <motion.div
                  className="h-[4px] rounded-full bg-gradient-to-r from-primary via-white to-primary"
                  initial="initial"
                  animate="final"
                  transition={{
                    duration: 3,
                    // eslint-disable-next-line unicorn/prefer-number-properties
                    repeat: Infinity,
                  }}
                  variants={{
                    initial: {
                      width: '10px',
                      opacity: '0',
                    },
                    final: {
                      width: '100%',
                      opacity: '1',
                    },
                  }}
                />
              </div>
              <figure className="rounded-md border-4 border-primary-500"><img className="w-full" src="https://github.com/s2ahil/TALK2DOCS/assets/101473078/da06acaa-c496-40c8-ba10-c62750f424b8" alt="" /></figure>
            </div>
          </div>

        </div>
        <div className="flex flex-wrap items-center justify-between p-8 w-full">
          <div className="w-full lg:w-[55%]">
            <div className="badge relative overflow-hidden">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary-color-light-500)_0%,var(--primary-color)_50%,var(--primary-color-light-500)_100%)]" />
              <div className="z-50 text-white">Step 3</div>
            </div>
            <h3 className="!mt-4">Ask any question 😇</h3>
            <p className="text-gray-500">
            Remmember typing option will not be enabled untill you upload your pdf 
            </p>
            <Link href="chat-with-docs">
            <button className="btn btn-wide bg-gradient-to-tl from-primary to-secondary text-white" href="#">Start for free</button>
            </Link>
          </div>
          <div className="w-full mt-6 lg:mt-0 lg:w-[40%]">
            <div className="card shadow-xl">
              <div className="absolute top-0 flex w-full justify-center">
                <motion.div
                  className="h-[4px] rounded-full bg-gradient-to-r from-primary via-white to-primary"
                  initial="initial"
                  animate="final"
                  transition={{
                    duration: 3,
                    // eslint-disable-next-line unicorn/prefer-number-properties
                    repeat: Infinity,
                  }}
                  variants={{
                    initial: {
                      width: '10px',
                      opacity: '0',
                    },
                    final: {
                      width: '100%',
                      opacity: '1',
                    },
                  }}
                />
              </div>
              <figure className="rounded-md border-4 border-primary-500"><img className="w-full" src="https://github.com/s2ahil/TALK2DOCS/assets/101473078/da06acaa-c496-40c8-ba10-c62750f424b8" alt="" /></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}