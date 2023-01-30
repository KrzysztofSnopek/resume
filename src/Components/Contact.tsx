// import '../Styles/Contact.css'

export function Contact() {
  return (
    <div className='font-bold text-2xl text-secondary px-10 bg-outro bg-contact-pattern bg-no-repeat pt-[20vh] md:pt-[30vh] lg:pt-[40vh]'>
      <div className='p-8'>GET IN TOUCH</div>

      <div className='p-8'>Do you think I could fit in the team? Let's make it reality. Message me now!</div>        

      <div className='p-3'>
        <div className='p-5'>
          <div className='text main-text'>Email</div>
          <div className='text secondary-text'>krzysztof.snopek1@gmail.com</div>
        </div>

        <div className='p-5'>
          <div className='text main-text'>Phone</div>
          <div className='text secondary-text'>+48 668 698 369</div>
        </div>  

         <div className='p-5'>
          <div className='text main-text'>Github</div>
          <a href='https://github.com/KrzysztofSnopek' className='no-underline'>https://github.com/KrzysztofSnopek</a>
        </div>              
      </div>
    </div>
  )
}
