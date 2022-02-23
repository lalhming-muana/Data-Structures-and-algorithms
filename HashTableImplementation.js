class HashTable{
    constructor(size){
        this.data = new Array(size);
    }


    _hash(key) { /* 
                    This means that it is a private function. This will generate the address
                    space where the (key,value) pair will finally be stored
                 */

        let hash = 0;
        for(let i=0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i)*i)%
            this.data.length
        }
        return hash;
        }
        
        set(key, value){
            let address= this._hash(key)  // Generates address
            if(!this.data[address]){      // Checks if the address is empty
                this.data[address] = [];  // Creates an empty array
                this.data[address].push([key,value]); // push the key,value to the array
                console.log(this.data)
            }
            
        }

        get(key){
            let address = this._hash(key)
            const currentBucket = this.data[address]
            console.log(currentBucket)
            if(currentBucket){
                for(let i=0; i<currentBucket.length; i++){
                    if(currentBucket[i][0] === key){
                        return currentBucket[i][1];
                    }
                }
            }
            return undefined;
        }


        keys(){
            const keysArray =[];
            for(let i=0 ; i<this.data.length;i++){
                if(this.data[i]){
                    keysArray.push(this.data[i][0][0]);
                }
            }
            return keysArray;
        }


}

const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
myHashTable.set('apples',3456);
