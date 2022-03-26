import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Acerca de', href: '/acerca', current: false },
  { name: 'Podcasts', href: '/podcasts', current: false },
]

const social = [
  {
    name: 'facebook',
    href: 'https://www.facebook.com/mishell.revelo.507',
    icon: '/icons/facebook.svg',
  },
  { name: 'instagram', href: 'https://www.instagram.com/5ta.pata_/', icon: '/icons/instagram.svg' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-[#01208a]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#ff7069] hover:text-white hover:bg-[#ff7069] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <MenuIcon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <a className="flex-shrink-0 flex items-center">
                    <Image
                      alt="Workflow"
                      className="h-8 w-auto"
                      height={40}
                      src="/logo.jpeg"
                      width={40}
                    />
                    <p className="hidden sm:block tracking-wider p-4 text-[#ff7069] font-bold text-lg w-auto">
                      La Quinta Pata
                    </p>
                  </a>
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                            item.current
                              ? 'bg-[#ff7069] text-black'
                              : 'text-gray-100 hover:bg-[#ff7069] hover:text-black',
                            'px-3 py-2 font-bold tracking-wide rounded-md text-sm',
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    {social.map((item) => (
                      <a
                        key={item.name}
                        // className="hover:bg-gray-700 px-2 rounded-md"
                        href={item.href}
                      >
                        <img
                          alt={`${item.name}-icon`}
                          className="hover:scale-110 transition-transform delay-75"
                          height={36}
                          src={item.icon}
                          width={36}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  aria-current={item.current ? 'page' : undefined}
                  as="a"
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  href={item.href}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
