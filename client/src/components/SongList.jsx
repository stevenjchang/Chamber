import React from 'react';
import ReactDOM from 'react-dom';
import SongEntry from './SongEntry.jsx';

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

handleSongPick(song) {
		this.props.handleSongPick(song);
	}

  render() {
    return (
			<div>
				{
					this.props.songs.map((song)=>{
						return (
							<div>
								<SongEntry key={song.submission_id} myName={this.props.myName} song={song} />
							</div>
						)})
				}
			</div>
    );
  }
}

export default SongList;
