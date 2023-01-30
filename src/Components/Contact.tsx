import '../Styles/Contact.css'

export function Contact() {
  return (
    <div className='font-bold text-3xl text-secondary px-10 bg-outro bg-contact-pattern bg-no-repeat p-2 pt-[20vh] md:pt-[30vh] lg:pt-[40vh] grid md:grid-cols-1 lg:grid-cols-2'>
      <div className='p-8 md:order-1'>GET IN TOUCH</div>

      <div className='p-8 md:order-3'>Do you think I could fit in the team? Let's make it reality. Message me now!</div>        

      <div className='p-3 md:order-2 row-span-2'>
        <div className='p-5'>
          <div className=''>Email</div>
          <div className=''>krzysztof.snopek1@gmail.com</div>
        </div>

        <div className='p-5'>
          <div className=''>Phone</div>
          <div className=''>+48 668 698 369</div>
        </div>  

         <div className='p-5'>
          <div className=''>Github</div>
          <a href='https://github.com/KrzysztofSnopek' className='git-link text-2xl'>https://github.com/KrzysztofSnopek</a>
        </div>              
      </div>
    </div>
  )
}
