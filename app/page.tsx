import Image from "next/image";
import { RightSection } from "~/components";

export default function Home() {
  return (
    <main className="w-full bg-dark text-foreground min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-container h-full">
        <section className="bg-header-gradient h-max lg:h-screen backdrop-blur-xl">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-6 py-6 lg:py-0 px-4 md:px-6 lg:px-12">
              <h1 className="text-foreground text-4xl font-black">
                -- About me
              </h1>
              <p className="leading-8 text-base text-foreground">
                Hi 👋🏽, I’m Judicaël Andriamahandry, a fanatical open sourceror.
                I'm a core team member at Tldraw, not only that I've contributed
                to open source project such as TanStack/query, TanStack/router,
                Abelljs and lot more.
                <br />
                <br />
                I mostly talk about Typescript, Javascript, User Experience,
                Frontend and more. If it happen that you love these tech too,
                feel free to DM me on Twitter. If I’m not coding or browsing
                twitter, I’m likely playing tennis or just chilling at home
                doing nothing 😄. <br />
                <br />
                If you like my works, consider sponsoring me on Patreon to keep
                them sustainable
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="relative w-20 h-20 rounded-full object-fill">
                  <Image
                    src="/judi.jpeg"
                    alt="Judicael image"
                    className="rounded-full"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl">Judicaël Andriamahandry</h3>
                  <span className="text-base">Frontend Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-max lg:min-h-screen">
          <RightSection />
        </div>
      </div>
    </main>
  );
}
