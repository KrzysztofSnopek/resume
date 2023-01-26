// import '../Styles/About.css'

export function About() {
  return (
    <div className="bg-secondary text-primary grid lg:grid-cols-2 gap-5">
        <div className='px-10 pt-10 font-bold text-2xl order-1 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia amet sunt quibusdam minus corporis distinctio nulla dignissimos laudantium, fugiat eos hic quasi vitae ab necessitatibus labore explicabo consectetur eligendi soluta veritatis nobis veniam. Porro assumenda eveniet laborum ratione ut et, soluta vero, rem delectus, est velit. Possimus eveniet praesentium magnam! Nihil doloribus explicabo consequuntur, exercitationem nostrum quis odit labore laborum placeat. Quasi, sunt ullam. Laboriosam minus perferendis fugit illo blanditiis excepturi quia maiores quae sapiente quod voluptate mollitia odit sint aliquam debitis obcaecati ex error exercitationem repellat velit earum sed, dolorum numquam autem? Cum repellendus a iste officiis porro.
        </div>

        <div className="px-10 order-2">
          <img src={require('../Images/about_1.png')} />
        </div>

        <div className="px-10 text-2xl font-bold order-3 lg:order-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam quidem velit quam ab amet architecto necessitatibus nostrum reprehenderit excepturi autem nam corporis in aspernatur, et exercitationem, maiores optio, provident asperiores? Est perspiciatis veritatis laudantium magnam, ea repellendus tempora illo numquam accusantium voluptas eos dicta fugiat sint, cum natus excepturi possimus alias inventore. Veniam nihil nam excepturi cumque fuga ex, a ipsa fugiat fugit eos neque dolor repellat soluta hic eius facere. Quos nostrum quia incidunt molestiae omnis possimus obcaecati quis commodi vero illum non, aspernatur consequuntur sed dignissimos? Sequi, mollitia unde. Veniam alias temporibus modi! Fugiat unde dolore aperiam?
        </div>

        <div className="px-10 order-4 lg:order-3">
          <img src={require('../Images/about_2.png')} />
        </div>
    </div>
  )
}
