import React from 'react';
import Link from "next/link";
import Image from 'next/image'

function Footer() {

    return (
        <footer>
            <div className='bg-hero-pattern2 bg-cover pt-6 bottom-0'>
                <div className='pt-3 pb-6'>



                    <div className='lg:px-[4rem] px-5'>

                        {/* <div class="flex rounded-lg bg-tahiti-300 border-tahiti-100 dark:border-tahiti-100 shadow-xl shadow-black/5 dark:shadow-black/30 pl-10"> */}
                        <div>
                            <div className="grid lg:grid-cols-1 sm:grid-cols-1 content-end">
                                <div className="pt-3 gap-40">
                                    <div className="text-base">


                                        {/* TEST ZONE START */}
                                        <div className='px-0 lg:px-48 py-1'>

                                            {/* FUCK */}

                                            <div class="grid w-full items-center pb-5">
                                                <div class="w-full justify-between flex space-x-2 flex-col md:flex-row">
                                                    {/* DIV 1 */}
                                                    <div className=' drop-shadow-2xl  pb-3 text-3xl'>
                                                        <h4 className="font-Garamond pt-3 text-4xl text-stone-800 tracking-tighter">Let's get in touch:</h4>
                                                        <h5 className="font-Avenir pt-2 text-stone-600 tracking-normal text-[1.1rem] leading-tight max-w-0.5 md:max-w-1 md:text-[1.4rem]">Available November 2023 for design opportunities.</h5>
                                                    </div>
                                                    {/* DIV 2 */}

                                                    <div className="pt-20">
                                                        <button class="bg-stone-900 hover:bg-white font-Avenir text-1xl text-white hover:text-stone-800 hover:border border-stone-800 py-4 px-4 w-60 h-15 right-0">
                                                            Contact Me
                                                        </button></div>

                                                </div>
                                            </div>

                                            {/* TEST ZONE END */}



                                            <div className="divide-y divide-stone-300 ">
                                                <div></div>
                                                <div>
                                                </div>
                                            </div>

                                            {/* <div class="w-full justify-between flex space-x-2 flex-col md:flex-row">
                      <h6 className="pt-20 font-SFproBold text-[14px] text-stone-600 uppercase tracking-[.15em]">competencies</h6> */}
                                            <h6 className="pt-20 font-SFproBold text-[15px] text-stone-600 uppercase tracking-[.2em]">competencies</h6>
                                            {/* </div> */}


                                            <div>

                                                <div className='mt-20 mb-10 p-1'>
                                                    <div className="grid grid-cols-0 md:grid-cols-5 gap-0 md:gap-16">

                                                        <div class="text-white">
                                                            {/* <div className="font-Avenir text-1xl">
                                Contribution
                              </div> */}
                                                            <div className="font-Avenir tracking-wide text-stone-800">
                                                                <div>Design Strategy</div>
                                                                <div>Art Direction</div>
                                                                <div>Product Design</div>
                                                                <div>Interaction Design</div>
                                                            </div>
                                                        </div>


                                                        <div class="text-white divide-x">
                                                            {/* <div className="font-Avenir text-1xl">
                                Tools
                              </div> */}
                                                            <div className="text-stone-800 tracking-wide font-Avenir">
                                                                <div>Figma</div>
                                                                <div>Miro</div>
                                                                <div>Photoshop</div>
                                                                <div>Illustrator</div>
                                                            </div>
                                                        </div>

                                                        <div class="text-white divide-x">
                                                            {/* <div className="font-Avenir text-1xl pr-5">
                                Tools
                              </div> */}
                                                            <div className="text-stone-800 tracking-wide font-Avenir pr-5 pt-10 md:pt-0">
                                                                <div>Sprinting</div>
                                                                <div>Copywriting</div>
                                                                <div>User Research</div>
                                                                <div>Project Management</div>
                                                            </div>
                                                        </div>




                                                        <div className="col-span-2 md:border-l  border-stone-300">
                                                            <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                                                                <h2 className="text-stone-700 font-SFpro leading-relaxed pt-20 md:pt-0 md:pl-10">Resume
                                                                </h2>
                                                            </Link>
                                                            <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}><h2 className="text-stone-800 font-Avenir  leading-relaxed gap-10 md:pl-10 pt-5">A degree in design at Simon Fraser University and 5 years of freelance work experience.</h2>
                                                            </Link>

                                                            <Link href={"https://github.com/brendanmmmkay/Portfolio/blob/main/brendanmckayresume.pdf"}>
                
                                                                {/* <button class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950"><div class="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-200"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button> */}
                                                                <button class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-150"><div class="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-800"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                                                            </Link>
                                                        </div>






                                                    </div>
                                                </div>

                                                {/* center align */}
                                                <div className="font-Avenir text-[14px] text-stone-400 grid grid-flow-col justify-center pt-40">
                                                    <div>Developed with Next.js and React by Brendan McKay</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;