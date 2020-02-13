import React from 'react'

 const Findride = () => {
    return (
        <div>
             <div className="spacecover3" >
          <section className="findride" id="findride">
            <h2>Rider trip</h2>
            <form>
            <p>25/11/19, 18:50<br/>
Toyota IST<br/>
TZS5,073<br/><br/>
</p>
              <label for="pickup">Pickup</label>
              <input type="text" name="pickup" />
              <label for="dropoff">Dropoff</label>
              <input type="text" name="dropoff" />
              <input type="datetime-local" name="bdaytime" />
              <input type="submit" />
            </form>
            <p>Driver name</p>
          </section>
        </div>
        </div>
    )
}
export default Findride