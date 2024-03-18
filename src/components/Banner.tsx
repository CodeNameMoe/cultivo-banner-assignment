import analyzeIcon from '@/app/assets/analyze-icon.svg'
import background from '@/app/assets/background.svg'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative flex flex-col p-6 bg-[#003E49] rounded-lg text-white max-w-xs font-sans '>
      <div className='absolute top-0 left-0 right-0 h-64 rounded-t-lg overflow-hidden'>
        <Image
          src={background}
          alt='Card background'
          layout='fit'
          objectFit='cover'
        />
      </div>
      <div className='relative z-10'>
        <div className='flex pt-8'>
          <Image src={analyzeIcon} width={64} height={64} alt='Analyze icon' />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='font-normal'>Next step</p>
          <p className='text-2xl font-normal'>Expert Report</p>
        </div>
      </div>
      <div className='relative z-10 mt-8 max-w-[300px]'>
        <p className='text-sm text-[16px] '>
          Please get in touch if you would like an expert report for this site.
          Benefits include:
        </p>
        <ul className='list-disc mt-4 text-[16px] font-normal pl-5'>
          <li>Key insights from our expert team</li>
          <li>An in-depth analysis of the site</li>
          <li>Recommendations of next steps to take</li>
        </ul>
      </div>
      <button className='relative z-10 mt-6 py-2 px-4 bg-white text-[#008096] rounded-lg w-full text-sm transition duration-200 ease-in-out hover:bg-[#E1F8FB]'>
        Get In Touch
      </button>
    </div>
  )
}

export default Banner
