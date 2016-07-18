function House(size, bedrooms, stories, bathrooms,value){
    
    
    this.size           = size;
    this.bedrooms       = bedrooms;
    this.stories        = stories;
    this.bathrroms      = bathrooms;
    this.value          = value
   
    
}
House.prototype.depreciate = function(decrement){
    this.value  -= decrement;
    // if(this.value <= 0){
    //   return 'Demo time!'
    // }else{
    //     return 'New Value: ' + this.value
    // }
    
    
   return this.value <= 0 ? 'Demo Time':'New Value: ' +this.value
}

var niceHouse =new House(4500,6, 3,8, 450000);
var miniHouse =new House(350,1,2,1, 25000);




