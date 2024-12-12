import Image from 'next/image'
import authorImage from '@/public/images/author/vishwas.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Vishwas.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Software engineer based in Dehradun, Uttarakhand. I&#39;m
          passionate about learning new technologies, problem solving and sharing knowledge with
          others. I like code and help anyone who wants to write code is passionate to learn any new skill 🚀.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Vishwas Mehra'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}