import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin sed urna sed commodo. Proin lobortis vehicula sem, sed imperdiet neque semper pulvinar. Aliquam sit amet augue ultrices, molestie lorem eu, accumsan ligula. Donec vel maximus mi. Sed quis nisi efficitur, sollicitudin nibh in, ultricies tellus. Mauris eget maximus massa, vel fermentum justo. Nullam consequat metus non diam efficitur ultrices. Vivamus ut porttitor elit. Donec ac eleifend orci. Proin rutrum libero vel eros viverra sagittis. In eget tortor sit amet elit cursus egestas. Cras eu tellus nibh. Quisque metus enim, dictum ornare vestibulum eu, mattis et lectus. Aliquam ac ornare metus. Sed in purus ut enim rutrum dictum in at metus.Fusce quis eros eu tellus varius aliquam. Donec sit amet sem nulla. Mauris ultricies nibh sapien, vitae ultrices velit viverra a. Aenean vehicula tincidunt lorem, mollis dapibus magna pharetra vitae. Nullam non eleifend justo. Cras nec nibh eget sapien egestas laoreet. Nulla facilisi. Pellentesque non diam et nulla mattis auctor. Nam efficitur fringilla mauris, in eleifend turpis condimentum quis.
    Donec et posuere purus. Donec placerat, lectus et vulputate laoreet, ligula leo convallis dolor, sit amet blandit lacus nulla nec elit. Nulla ac bibendum leo, sit amet aliquet est. Suspendisse potenti. Nullam maximus non arcu vitae dapibus. Vivamus et aliquam lacus. In non felis dolor. Aenean sodales malesuada libero, ac commodo nisl elementum et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer interdum ullamcorper nibh et aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ultricies nisi id magna iaculis, sed sollicitudin mauris malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sodales diam vel justo scelerisque mollis. Phasellus suscipit volutpat diam, vel suscipit lectus porttitor pellentesque.
    
    Fusce venenatis magna eu tortor ullamcorper, a pharetra metus mollis. Pellentesque fermentum odio sit amet pellentesque aliquam. Phasellus tempus velit nec nibh sodales, accumsan facilisis urna rhoncus. Ut et posuere est. Aenean vitae sem vel turpis sollicitudin efficitur eu quis est. Nunc ut quam mi. Nullam at suscipit metus.Sed facilisis imperdiet ornare. Nam tristique scelerisque ante, vel efficitur mauris vestibulum ut. Nam finibus massa sit amet placerat fringilla. Aenean quis commodo libero, eu volutpat tellus. Sed odio ex, tincidunt mollis diam eget, viverra vestibulum ligula. Maecenas quis erat ut neque iaculis interdum et vitae nulla. Mauris porta arcu risus, vitae efficitur nisi commodo ut. Curabitur elementum iaculis nibh quis facilisis. Nullam ut malesuada velit, sed lacinia justo.Praesent quis est at lectus pharetra tincidunt. Nulla facilisi. Aenean hendrerit leo sed arcu dictum consectetur. Maecenas accumsan fermentum accumsan. Fusce imperdiet est cursus efficitur venenatis. Vivamus accumsan pharetra nibh. Praesent luctus mollis consectetur.
    Vivamus accumsan lorem tincidunt magna eleifend vestibulum. Duis feugiat mauris a justo pulvinar imperdiet a sit amet tortor. Maecenas iaculis mi risus, a viverra ipsum finibus sit amet. Vestibulum fringilla, augue at ornare pharetra, odio tellus pellentesque lectus, in semper tellus ante at urna. Integer sit amet eros vitae est semper sodales. Nullam interdum, nisl eget dapibus ornare, eros odio rhoncus ligula, eu aliquet libero metus sit amet lectus. Phasellus at pretium lacus, id feugiat tellus. Pellentesque iaculis orci eget aliquam laoreet. Donec eget finibus eros, sed semper tellus. Sed sed tellus vel quam convallis posuere. Quisque pellentesque tellus non dui faucibus, laoreet iaculis nibh euismod. Maecenas vel luctus nisl. In et porta eros. Etiam placerat, nunc in consectetur varius, lectus dui vehicula quam, id convallis nunc leo sed ligula.`;

    const showText = () => {
        return text.split(/\r?\n/).map((p, i) => <Card.Text key={i} style={{textIndent: '30px', textAlign: 'justify'}}>{p}</Card.Text>);
    };

    return ( 
        <div className="content">
            <div className="container container--column" style={{ flexGrow: 1 }}>
            <Card style={{padding: '1rem'}}>
                <Card.Body>
                    <Card.Title className="mb-2">ReactBootStrap, Redux Project</Card.Title>
                    <Card.Subtitle className="mb-5 text-muted">
                        Serdecznie zapraszam do odwiedzenia mojego głównego projektu AniMark.pl poświęconego anime! &nbsp;
                        <Card.Link href="http://animark.questionmarksanime.pl" target="_blank">AniMark.pl</Card.Link>
                    </Card.Subtitle>
                    {showText()}
                </Card.Body>
            </Card>
            </div>
        </div>
     );
}
 
export default Home;