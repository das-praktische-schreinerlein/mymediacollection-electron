import {AppEnvironment} from './app-environment';
import {DataMode} from '../shared/commons/model/datamode.enum';

export const environment: AppEnvironment = {
    production: true,
    assetsPathVersionSnippet: '',
    assetsPathVersionSuffix: '',
    pdocWritable: false,
    pdocActionTagWritable: false,
    pdocEmptyDefaultSearchTypes: 'page',
    backendApiBaseUrl: 'http://localhost:6102/api/v1/',
    audioBaseUrl: 'http://localhost:6102/api/static/audiostore/',
    picsBaseUrl: 'http://localhost:6102/api/static/picturestore/',
    videoBaseUrl: 'http://localhost:6102/api/static/videostore/',
    defaultSearchTypes: 'artist',
    emptyDefaultSearchTypes: 'artist',
    useAssetStoreUrls: true,
    useAudioAssetStoreUrls: true,
    useVideoAssetStoreUrls: false,
    mdocWritable: false,
    mdocActionTagWritable: false,
    allowAutoPlay: true,
    mdocMaxItemsPerAlbum: 20000,
    m3uAvailable: true,
    cookieLawSeenName: 'cookieLawSeenV20180525',
    trackingProviders: [], // Angulartics2Piwik
    hideInternalDescLinks: false,
    hideInternalImages: false,
    startDataMode: DataMode.BACKEND,
    availableDataModes: [DataMode.BACKEND]
};

// unset logger
console.trace = function() {};
console.debug = function() {};
console.log = function() {};
console.warn = function() {};
console.error = function() {};

