import '../Styles/Contact.css'

export function Contact() {
  return (
    <div className='contact contact-grid bg-outro pt-[20vh] md:pt-[30vh] lg:pt-[40vh]'>
      <div className='grid-col item-1 text main-text grid-headline'>GET IN TOUCH</div>

      <div className='grid-col item-2 text main-text'>Do you think I could fit in the team? Let's make it reality. Message me now!</div>        

      <div className='grid-col item-3'>
        <div className='contact-list'>
          <div className='text main-text'>Email</div>
          <div className='text secondary-text'>krzysztof.snopek1@gmail.com</div>
        </div>

        <div className='contact-list'>
          <div className='text main-text'>Phone</div>
          <div className='text secondary-text'>+48 668 698 369</div>
        </div>  

         <div className='contact-list'>
          <div className='text main-text'>Github</div>
          <a href='https://github.com/KrzysztofSnopek' className='text secondary-text'>https://github.com/KrzysztofSnopek</a>
        </div>              
      </div>
    </div>
  )
}
