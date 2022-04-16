
import Plan from './Plan';
import './App.css';


function App() {
  const plan= [
    {
        name: "Free",
        price: 0,
        features:[
          
          {name:"Single User",  enabled: true},
          {name:"5GB Storage",  enabled: true},
          {name:"unlimited public projects", enabled: true},
          {name:"comunity access ", enabled: true},
          {name:"unlimited private projects", enabled: false},
          {name:"Dedicated phone support", enabled: false},
          {name:"Free Subdomain",  enabled: false},
          {name:"Monthly Status Reports", enabled: false},
        
        ],

    },
    {
      name: "Plus",     
      price: 9,
      features:[
        
        {name:"5 Users", enabled: true},
        {name:"50GB Storage", enabled: true},
        {name:"unlimited public projects", enabled: true},
        {name:"comunity access ", enabled: true},
        {name:"unlimited private projects", enabled: true},
        {name:"Dedicated phone support", enabled: true},
        {name:"Free Subdomain", enabled: true},
        {name:"Monthly Status Reports", enabled: false},
      
      ],

  },
  {
    name: "Pro",
    price: 49,
    features:[
      
      {name:"Unlimited Users", enabled: true},
      {name:"150GB Storage", enabled: true},
      {name:"unlimited public projects", enabled: true},
      {name:"comunity access ", enabled: true},
      {name:"unlimited private projects", enabled: true},
      {name:"Dedicated phone support", enabled: true},
      {name:"Free Subdomain", enabled: true},
      {name:"Monthly Status Reports", enabled: true},
    
    ],

},

  ]
  return (
<section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
          plan.map((plan, index)=>{
              return <Plan key= {index}  name= {plan.name} price={plan.price} features={plan.features}    />

          })


      }
      
    </div>
  </div>
</section>
  );
}

export default App;
