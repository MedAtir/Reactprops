import Proptypes from 'prop-types'
function Profile(props) {
    const {fullName, bio, profession, handleName } = props;
    return(
        <div style={{ backgroundColor :'darkblue', padding : '20px'}}>
            <div style={{display: 'flex', alignItems:'center' }}>
                {props.children}
                <div style={{ marginLeft: '20px'}}>
                    <h1 style={{fontSize: '30px', margin: '0'}}>{fullName}</h1>
                    <h3 style={{fontSize: '20px', color: '#6c757d', margin: '0'}}>{profession}</h3>
                </div>
                </div>
                <p style={{ fontSize:'18px', marginTop:'20px'}}>{bio}</p>
        </div>
    );
}


Profile.prototype = {
    fullName : Proptypes.string.isRequired,
    bio : Proptypes.string.isRequired,
    profession : Proptypes.string.isRequired,
    handleName : Proptypes.func.isRequired
};


Profile.defaultProps = {
    fullName: 'Atir Mohammed',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut at deserunt suscipit repellendus! Deleniti cumque quo numquam .',
    profession: 'Web DEVELOPER'
};
export default Profile;