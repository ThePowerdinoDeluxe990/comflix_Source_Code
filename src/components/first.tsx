import "./styles/app.css"

export default function First(){
    const Alerta =()=>{
        alert("No funciona")
      }

    return(
        <div>
            <h1> Lo mas visto</h1>

            <div className='slider'>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="ver">Ver</button>
                    </div>

                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />

                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="ver">Ver</button>
                    </div>

                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="ver">Ver</button>
                    </div>
                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="ver">Ver</button>
                    </div>
                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="ver">Ver</button>
                    </div>
                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="ver">Ver</button>
                    </div>
                </div>
            </div>


        
            <div>
            <h1> Lo mas Jugado</h1>

            <div className='slider'>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="game">Play</button>
                    </div>

                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />

                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="game">Play</button>
                    </div>

                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="game">Play</button>
                    </div>
                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="game">Play</button>
                    </div>
                </div>

                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="game">Play</button>
                    </div>
                </div>
                <div className="movie">
                    <img src="https://i.ytimg.com/vi/mIjSpRlf9o4/maxresdefault.jpg" />
                    <div className="textbut">
                        <p>Momazos diego</p>
                        <button onClick={Alerta} className="game">Play</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}