import './Welcome.css';

function Welcome() {

    const user_name = 'Yakkov';
    const welcome = <span>Welcome</span>

    return (
        <div className='Welcome'>
            <span>{welcome} <b>{user_name}!</b></span>
        </div>
    );
}
export default Welcome;