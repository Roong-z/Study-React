import React, {Component} from 'react';

function getNumbers(){

}

class NumberBaseball extends Component {
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries : [],
    };

    onSubmitForm = ()=>{

    };

    onChangeInput = ()=>{

    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {[
                        {name:'코숏',Cha:'길냥이다'},
                        {name :'뱅갈', Cha: '표범무늬'},
                        {name:'놀숲',Cha:'귀가길다'},
                        {name:'스핑크스',Cha:'털이없다'},
                        {name:'아베시니안',Cha:'길쭉하다'}
                    ].map((val)=>{
                        return (
                         <li key={val.name + val.Cha}><b>{val.name}</b>-{val.Cha}</li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;
