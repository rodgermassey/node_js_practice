const obj = {
    a: function hello (){
        // console.log(this)
        function bye(that){
            function hi(that){
                console.log(that, 'hello')
            }
            hi(that)
        }
        bye(this)
    },
    // hi(){
    //     console.log('hello this is hi')
    // }, bye(){
    //     console.log('hello this is bye')
    // }
    // b: function bye(){
    //     console.log('bye')
    // }
}
obj.b=first
function first () {
    console.log(this)
}
// first()
obj.a()