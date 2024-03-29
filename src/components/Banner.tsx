import Image from 'next/image'
import { useState } from 'react'
import { ContactFormDialog } from './ContactFormDialog'

interface BannerProps {
  backgroundSrc: string
  iconSrc: string
  preSubmitTitle: string
  preSubmitDescription: string
  preSubmitListItems: string[]
  preSubmitButtonLabel: string
  postSubmitTitle: string
  postSubmitDescription: string
  postSubmitButtonLabel: string
  preSubmitSubTitle: string
}

const Banner: React.FC<BannerProps> = ({
  backgroundSrc,
  iconSrc,
  preSubmitTitle,
  preSubmitSubTitle,
  preSubmitDescription,
  preSubmitListItems,
  preSubmitButtonLabel,
  postSubmitTitle,
  postSubmitDescription,
  postSubmitButtonLabel,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleOpenDialog = () => setIsDialogOpen(true)
  const handleCloseDialog = () => setIsDialogOpen(false)

  const handleFormSubmitted = () => {
    setFormSubmitted(true)
    handleCloseDialog()
  }

  return (
    <div className='relative flex flex-col p-6 bg-[#003E49] rounded-lg text-white max-w-xs font-sans'>
      <div className='absolute top-0 left-0 right-0 h-64 rounded-t-lg overflow-hidden'>
        <Image
          src={backgroundSrc}
          alt='Card background'
          layout='fifitll'
          objectFit='cover'
        />
      </div>
      <div className='relative z-10'>
        <div className='flex pt-8'>
          <Image src={iconSrc} width={64} height={64} alt='Banner icon' />
        </div>
        {formSubmitted ? (
          <div className='pt-4'>
            <h1 className='text-xl font-normal'>{postSubmitTitle}</h1>
            <p className='mt-12'>{postSubmitDescription}</p>
            <button
              onClick={() => setFormSubmitted(false)}
              className='mt-6 py-2 px-4 bg-white text-[#008096] rounded-lg w-full text-sm transition duration-200 ease-in-out hover:bg-[#E1F8FB]'
            >
              {postSubmitButtonLabel}
            </button>
          </div>
        ) : (
          <>
            <div className='flex flex-col gap-1'>
              <h2>{preSubmitSubTitle}</h2>
              <h1 className='font-normal text-[24px]'>{preSubmitTitle}</h1>
            </div>
            <div className='mt-8 max-w-[300px]'>
              <p className='text-sm text-[16px]'>{preSubmitDescription}</p>
              <ul className='list-disc mt-4 text-[16px] font-normal pl-5'>
                {preSubmitListItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleOpenDialog}
              className='mt-6 py-2 px-4 bg-white text-[#008096] rounded-lg w-full text-sm transition duration-200 ease-in-out hover:bg-[#E1F8FB]'
            >
              {preSubmitButtonLabel}
            </button>
          </>
        )}
      </div>
      <ContactFormDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onFormSubmitted={handleFormSubmitted}
      />
    </div>
  )
}

export default Banner
