import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
export default function about() {
  return (
    <>
      <Head>
        <title>Shubh | About</title>
      </Head>
      <Wrapper pageIndex={2}>
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
          <Image 
            className="rounded-xl"
            src={"/about1.jpg"}
            width={300}
            height={250}
            alt={"about image"}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Introduction
            </div>
            <div className="font-semibold text-3xl mt-8 text-White uppercase">
              Full Stack Web Developer, based in .
            </div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              {" "}
              I am a passionate fullstack developer with a creative eye for
              design and a strong focus on delivering elegant and intuitive
              products. Excited to collaborate on new projects!
            </p>
            <div className="flex gap-8 mt-8">
              <Link
                href="/contact"
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Contact Me
              </Link>
              <a
                href="/pdf/resume.pdf"
                download
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <Skills skills={skills}/>
      </Wrapper>
    </>
  );
}
