import '../Styles/Home.css'

export function Home() {
  return (
      <div className='home home-grid' id='home-grid'>

        <div className='greetings'>
          <div className="left-side intro-head">
            Krzysztof Snopek
          </div>   

          <div className='intro-body'>
            I like to create solid apps and learn new technologies.
          </div>
        </div>

        <div className='col-1 intro-body-small'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consectetur eos quas architecto nulla ad necessitatibus illum tempore tenetur dolorem.
        </div>

        <div className='col-2 intro-body-small'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat cumque expedita natus ipsa fugit vel sapiente. Impedit, qui ea.
        </div>

        <div className="img-border">
          <div className='photo-2'></div>          
        </div>
      </div>
  )
}
