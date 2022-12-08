(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit2( fruit: string ): boolean {
        
        /* if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
            return true;
        } else {
            return false;
        }*/

        /*REFACTORIZADO*/
        const fruits = [{element:'manzana'}, {element:'cereza'}, {element: 'ciruela'}];

        return fruits.some(f => f.element === fruit);
        
       
    }

    function isRedFruit( fruit: string ): boolean {
        
        /*REFACTORIZADO curso*/

        const redFruits = ['manzana','cereza','ciruela'];

        return redFruits.includes(fruit);
        //return ['manzana','cereza','ciruela'].includes(fruit);

    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor2( color: string ): string[] {

        /*if ( color === 'red' ) {
            return ['manzana','fresa'];
        } else if ( color === 'yellow') {
            return ['piña','banana'];
        } else if ( color === 'purple') {
            return ['moras','uvas']
        } else {
            throw Error('the color must be: red, yellow, purple');
        }*/

        /**REFACTORIZADO yo*/

        /**
         * const map1 = new Map<number, string[]>([
                [0, ['a', 'b']],
                [1, ['c', 'd']],
                ]);

                map1.set(2, ['e', 'f']);

                // 👇️ ['e', 'f']
                console.log(map1.get(2));
         */
        let colours: string[] =[];
        const colorFruits: {[name: string]:string []} = {
            'red' : ['manzana','fresa'],
            'yellow': ['piña','banana'],
            'purple' : ['moras','uvas']
        };
            
        const map = new Map<string, string[]>(Object.entries(colorFruits));
        console.log(map.get(color));
        if (map.get(color)){
            colours = map.get(color)??[];
        }else{
            throw Error('the color must be: red, yellow, purple');
        }
        
        return colours;
    }

    type FruitColor = 'red'|'yellow'|'purple';

    function getFruitsByColor( color: string ): string[] {

        /**REFACTORIZADO curso*/
        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas']
        };

        if (!Object.keys(fruitsByColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        }
            
        return fruitsByColor[color];
       
        /*switch(color){
            case 'red':
                return ['manzana','fresa'];
            case 'yellow':
                return ['piña','banana'];
            case 'purple':
                return ['moras','uvas'];
            default:
                throw Error('the color must be: red, yellow, purple');
        }*/
    }


    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
       /* if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }
    */
        if ( !isFirstStepWorking === true )  return 'First step broken.';
        if ( !isSecondStepWorking === true ) return 'Second step broken.'; 
        if ( !isThirdStepWorking === true )  return 'Third step broken.';
        if ( !isFourthStepWorking === true )  return 'Fourth step broken.';

        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




