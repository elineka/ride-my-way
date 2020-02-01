import React from 'react'

 const Offerride = () => {
    return (
        <div>
               <div className="spacecover2" id="offerride">
          <section className="offerride">
            <h2>Enter your detail to offer a ride</h2>
            <form>
              <label for="leavingfrom">Leaving from</label>
              <input type="text" name="leavingfrom" id="leavingfrom" />
              <label for="goingto"> Going to</label>
              <input type="text" name="goingto" id="goingto"/>
              <input type="datetime-local" name="time" />
              <input type="submit" />
            </form>
          </section>
        </div>
        </div>
    )
}
export default Offerride