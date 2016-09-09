angular.module("music-history")
  .controller('HomeCtrl', [
    '$http',
    '$scope',
    'RootFactory',
    '$timeout',
    function ($http, $scope, RootFactory, $timeout) {
      $scope.title = "Home"
      $scope.apiRoot = null;
      $scope.songs = null;
      $scope.artists = null;
      $scope.albums = null;
      $scope.songList = [];


      $scope.getSongs = () => {
        return $http.get($scope.apiRoot.songs)
          .then(res => {
            $scope.songs = res.data
            $timeout()
            return $scope.songs
          })
      }

      $scope.getArtists = () => {
        return $http.get($scope.apiRoot.artists)
          .then((res) => {
            $scope.artists = res.data;
            return $scope.artists
          });
      }

      $scope.getAlbums = () => {
        return $http.get($scope.apiRoot.albums)
          .then(res => {
            $scope.albums = res.data
            return $scope.albums;
          });
      }

      $scope.generateSongList = () => {
        console.log($scope.artists)
        for (var i = 0; i < $scope.songs.length; i++) {
            const song = $scope.songs[i];
            let songAlbumId = song.album;
            let albumObject = $scope.albums[songAlbumId - 1];
            song.albumName = albumObject.name;

            let songArtistId = albumObject.artist;
            let artistObject = $scope.artists[songArtistId - 1]
            song.artistName = artistObject.name;

            // $scope.songs[i].artistObject = $scope.artists[songArtistId];
        }
        console.log($scope.songs)
      };

      $scope.getRoot = () => {
        return RootFactory.getApiRoot()
        .then(res => {
          $scope.apiRoot = res
          return $scope.apiRoot;
        })
      };

      $scope.getRoot()
      .then(() => $scope.getArtists())
      .then(() => $scope.getAlbums())
      .then(() => $scope.getSongs())
      .then(() => $scope.generateSongList())
    }
  ]);
