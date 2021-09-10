import React, { useEffect, useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind, add }) {
  const { id } = useParams();
  const [formData, setFormData] = useState([])
  const history = useHistory()


  let snack = items.find(snack => snack.id === id);
  let drink = items.find(drink => drink.id === id);
  const handleChange = (e) =>{

    add(snack||drink)
  }
const handleSubmit = (e) =>{
  e.preventDefualt()
  add(formData)
  history.push('/')

}
  useEffect(() =>{
    handleChange()
  },[])
  console.log(formData)

  
  if (!snack) return <Redirect to={cantFind} />;
  if (!drink) return <Redirect to={cantFind} />;

  

  return (
    <section>
      {/* if snacks are present display the snack else display the drink */}
      {snack ? <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center" name="snack">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
          <form onSubmit = {handleSubmit}>
            <button>Add to order</button>
            </form>
          
        </CardBody>
      </Card>:
      <Card>
      <CardBody>
        <CardTitle className="font-weight-bold text-center" name="drink">
          {drink.name}
        </CardTitle>
        <CardText className="font-italic">{drink.description}</CardText>
        <p>
          <b>Recipe:</b> {drink.recipe}
        </p>
        <p>
          <b>Serve:</b> {drink.serve}
        </p>
        <form onSubmit = {handleSubmit}>
            <button>Add to order</button>
            </form>
      </CardBody>
    </Card>}
    </section>
  );
}

export default FoodItem;
