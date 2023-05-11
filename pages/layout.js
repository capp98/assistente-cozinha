export default function Layout({ children }) {
  return (
    <>
      <main class="flex flex-row bg-indigo-200">
        <aside class="bg-indigo-900 h-screen w-16">
          <nav class="text-center p-1 h-full">
            <a href="#" target="_blank" class="icon mt-2 p-3 block">
              <img
                src="/static/images/box_icon-white.svg"
                alt="inventory icon"
              />
            </a>
            <a href="#" target="_blank" class="icon mt-1 p-3 block">
              <img
                src="/static/images/book_icon-white.svg"
                alt="inventory icon"
              />
            </a>
          </nav>
        </aside>
        <main id="layout-children" class="p-3 px-5 w-full">
          {children}
        </main>
      </main>
    </>
  );
}
