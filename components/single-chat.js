

const SingleChat = (props) => {
   return <div> 
   {props.channels.map((e,i) => 
    <div key={i} className="single-chat" onClick={() => props.showChannel(e.url)}>
    <div className="image-wrap">
    <div className="single-image">
    <img src={e.coverUrl} width="100%"/>
    </div>
    </div>
    <div className="meta-side">
    <div className="single-name">
    {e.name}
    </div>
    </div>
    </div>
    )}
    <style jsx>{`
    .single-chat:hover {
        cursor:pointer;
        background-color:#eee;
    }
    .single-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        display:flex;
    }
    .single-chat {
        height:72px;
        display:flex;
        align-content:center;
        flex-direction: row;
        border-bottom:1px solid #eee;
    }
    .image-wrap {
        flex: none;
        display: flex;
        align-items: center;
        padding: 0 15px 0 13px;
    }
    .single-name {
        display:flex;
    }
    .meta-side {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    } 
    `}</style>
    </div>
}
export default SingleChat;