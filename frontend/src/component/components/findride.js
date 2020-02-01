import React from 'react'

 const Findride = () => {
    return (
        <div>
             <div className="spacecover3" >
          <section className="findride" id="findride">
            <h2>Enter your detail to find a ride</h2>
            <form>
              <label for="pickup">Pickup</label>
              <input type="text" name="pickup" />
              <label for="dropoff">Dropoff</label>
              <input type="text" name="dropoff" />
              <input type="datetime-local" name="bdaytime" />
              <input type="submit" />
            </form>
          </section>
        </div>
        </div>
    )
}
export default Findride