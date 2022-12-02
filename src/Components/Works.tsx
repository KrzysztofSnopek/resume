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
    <div className='works'>Works
      <div className="left-paragraph">
        <div className='slider'>
          <ImageSlides Slides={updatedSlides[0]} />
        </div>
      </div>
      <div className="right-paragraph">
        <div className='slider'>
          <ImageSlides Slides={updatedSlides[1]} />
        </div>
      </div>
      <div className="left-paragraph">
        3
      </div>
      <div className="right-paragraph">
        4
      </div>
    </div>
  )
}
