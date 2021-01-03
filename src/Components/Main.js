
import cake from '../assets/birthday-cake.svg'
import FadeIn from 'react-fade-in'
import image1 from '../assets/image_1.jpg'
import image2 from '../assets/image_2.jpg'
import image3 from '../assets/image_3.jpg'

const Main = () =>{
    return([
        
            <div className="main-container">
                <FadeIn
                    transitionDuration={1000}
                    delay={500}
                >   
                    <div>
                        <h1>Happy Birthday Theresa!</h1>
                    </div>
                    <div className="cake-container">
                        <img src={cake}/>
                    </div>

                    <div className="image-container">
                        <img src={image1}/>
                        <div className="description-container">
                            <p>
                            So in true Gladys fashion, we will be extra for your special day! It is your birthday boo!!! We don't do regular ass Insta posts, you getting a whole website. You are a true boss ass bitch; an absolute force to be reckoned with. Waking up with a flawless vibe on your good days and bad. A true queen in your own right. 
                            </p>
                            <p>
                            Wishing you the happiest of days on the 30th anniversary of your life! Thank you for being such an amazing friend and for always being there! You are such an important part of my life; I don't know what I would do without you. 
                            </p>
                        </div>
                        
                    </div>

                    <div className="image-container">
                        <img src={image2}/>
                        <div className="description-container">
                            <p>You brighten my day every day and have been an absolute real one since day one. I love and appreciate you! There’s isn’t another woman like you (yet). I can't wait for our half birthday banger in a couple of months! </p>
                        </div>

                    </div>

                    <div className="image-container">
                        <img src={image3}/>
                        <div className="description-container">
                            <p>LOVE YOU! From, your ride or die and better half (Sorry Steve)</p>
                        </div>
                    </div>


                </FadeIn>


            </div>
        

    ])
}

export default Main