import '../Styles/Works.css'
import ImageSlides from "./ImageSlides";
import { fetchApi1, stock1, stock2, stock3, stock4, todo1, todo2 } from './ImagesImport';

export function Works() {

  const updatedSlides: any[][] = [
    [stock1, stock2, stock3, stock4],
    [todo1, todo2],
    [fetchApi1]
  ]

  return (  
    <div className='works'>
      <h1>Works</h1>

      <div className="grid-template">

        <div className="left-paragraph stock-app">
          <div className='slider grid-slider'>
            <ImageSlides Slides={updatedSlides[0]} />
          </div>
          <div className="proj-description grid-descr">
            <h2>Stock App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum aperiam perferendis vero quae dolore, nihil totam fuga exercitationem aliquam, sunt, provident minus numquam illo consequuntur perspiciatis dolor atque sequi corrupti illum! Porro deleniti soluta unde officia numquam error alias, rerum mollitia, cumque placeat earum veniam eligendi sit dolor! Sit doloribus a consequatur nobis nisi facilis eum aut architecto hic quam? Quas atque quisquam, dolor ut laboriosam et, ipsa nihil cupiditate tempora voluptatibus hic voluptatum earum eius dolorum sunt. Ipsa tenetur aperiam placeat quos in, commodi maxime sunt ipsam incidunt vero repudiandae asperiores optio temporibus, veritatis magni, illo veniam amet!
            </p>
          </div>
        </div>

        <div className="right-paragraph api-app">
          <div className='slider grid-slider'>
            <ImageSlides Slides={updatedSlides[1]} />
          </div>
          <div className="proj-description grid-descr">
            <h2>ToDo App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum aperiam perferendis vero quae dolore, nihil totam fuga exercitationem aliquam, sunt, provident minus numquam illo consequuntur perspiciatis dolor atque sequi corrupti illum! Porro deleniti soluta unde officia numquam error alias, rerum mollitia, cumque placeat earum veniam eligendi sit dolor! Sit doloribus a consequatur nobis nisi facilis eum aut architecto hic quam? Quas atque quisquam, dolor ut laboriosam et, ipsa nihil cupiditate tempora voluptatibus hic voluptatum earum eius dolorum sunt. Ipsa tenetur aperiam placeat quos in, commodi maxime sunt ipsam incidunt vero repudiandae asperiores optio temporibus, veritatis magni, illo veniam amet!
            </p>
          </div>
        </div>

        <div className="left-paragraph todo-app">
          <div className='slider grid-slider'>
            <ImageSlides Slides={updatedSlides[2]} />
          </div>
          <div className="proj-description grid-descr">
            <h2>Api Reading Api</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum aperiam perferendis vero quae dolore, nihil totam fuga exercitationem aliquam, sunt, provident minus numquam illo consequuntur perspiciatis dolor atque sequi corrupti illum! Porro deleniti soluta unde officia numquam error alias, rerum mollitia, cumque placeat earum veniam eligendi sit dolor! Sit doloribus a consequatur nobis nisi facilis eum aut architecto hic quam? Quas atque quisquam, dolor ut laboriosam et, ipsa nihil cupiditate tempora voluptatibus hic voluptatum earum eius dolorum sunt. Ipsa tenetur aperiam placeat quos in, commodi maxime sunt ipsam incidunt vero repudiandae asperiores optio temporibus, veritatis magni, illo veniam amet!
            </p>
          </div> 
        </div>

      </div>
    </div>
  )
}
