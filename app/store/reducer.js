import _cloneDeep from 'lodash/cloneDeep';
import { SEARCH_RESULT } from './action';

const initialState = {
  searchedSongs: [
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 18056658,
      collectionId: 604815149,
      trackId: 604815151,
      artistName: 'Sonu Nigam & Ajay-Atul',
      collectionName: 'Best of Me: Sonu Nigam',
      trackName: 'Abhi Mujh Mein Kahin (From "Agneepath")',
      collectionCensoredName: 'Best of Me: Sonu Nigam',
      trackCensoredName: 'Abhi Mujh Mein Kahin (From "Agneepath")',
      collectionArtistName: 'Sonu Nigam',
      artistViewUrl:
        'https://music.apple.com/us/artist/sonu-nigam/18056658?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/abhi-mujh-mein-kahin-from-agneepath/604815149?i=604815151&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/abhi-mujh-mein-kahin-from-agneepath/604815149?i=604815151&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d4/06/39/d4063988-a5c8-974e-059b-5233110a322c/mzaf_2253161526891008132.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/3b/4e/71/3b4e71d0-ea23-fc9c-1a65-33ec2ca38ef4/source/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/3b/4e/71/3b4e71d0-ea23-fc9c-1a65-33ec2ca38ef4/source/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/3b/4e/71/3b4e71d0-ea23-fc9c-1a65-33ec2ca38ef4/source/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2011-12-16T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 12,
      trackNumber: 1,
      trackTimeMillis: 364787,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Bollywood',
      isStreamable: true
    }
  ]
};

export const searchReducer = (state = initialState, action) => {
  const stateClone = _cloneDeep(state);

  switch (action.type) {
    case SEARCH_RESULT:
      stateClone.searchedSongs = action.payload;
      return stateClone;
    default:
      return state;
  }
};
