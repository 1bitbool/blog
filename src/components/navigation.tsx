"use client";
import { HiOutlineXMark as XMarkIcon } from "react-icons/hi2";
import { HiOutlineBars3 as Bars3Icon } from "react-icons/hi2";
import { FaGlobe } from "react-icons/fa";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";

const navigation = [
  { name: "Posts", href: "#" },
  { name: "About", href: "#" },
];

export default function Navigation() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b border-b-gray-200"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">1BitBool</span>
            <img
              className="h-8 w-auto"
              src="/assets/vercel.svg"
              alt="1BitBool"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <DialogTrigger>
            <Button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
            <Modal className="lg:hidden">
              <div className="fixed inset-0 z-10" />

              <Dialog className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                {({ close }) => (
                  <>
                    <div className="flex items-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">1BitBool</span>
                        <img
                          className="h-8 w-auto"
                          src="/assets/vercel.svg"
                          alt="1BitBool"
                        />
                      </a>
                      <Button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onPress={close}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="py-6">
                          <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Language
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Dialog>
            </Modal>
          </DialogTrigger>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Switch Language</span>
            <FaGlobe className="h-6 w-6"></FaGlobe>
          </button>
        </div>
      </nav>
    </header>
  );
}
