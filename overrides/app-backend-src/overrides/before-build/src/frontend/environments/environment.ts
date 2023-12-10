// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import {AppEnvironment} from './app-environment';
import {DataMode} from '../shared/commons/model/datamode.enum';

export const environment: AppEnvironment = {
    hideCopyrightFooter: true,
    production: false,
    assetsPathVersionSnippet: '',
    assetsPathVersionSuffix: '',
    pdocWritable: true,
    pdocActionTagWritable: true,
    pdocEmptyDefaultSearchTypes: 'page',
    backendApiBaseUrl: 'http://localhost:6100/api/v1/',
    audioBaseUrl: 'http://localhost:6100/api/static/audiostore/',
    picsBaseUrl: 'http://localhost:6100/api/static/picturestore/',
    videoBaseUrl: 'http://localhost:6100/api/static/videos/',
    defaultSearchTypes: 'artist',
    emptyDefaultSearchTypes: 'artist',
    useAssetStoreUrls: true,
    useAudioAssetStoreUrls: true,
    useVideoAssetStoreUrls: false,
    skipMediaCheck: false,
    mdocWritable: true,
    mdocActionTagWritable: true,
    allowAutoPlay: true,
    mdocMaxItemsPerAlbum: 20000,
    m3uAvailable: true,
    cookieLawSeenName: 'cookieLawSeenV20180525',
    trackingProviders: [], // Angulartics2Piwik
    adminBackendApiBaseUrl: 'http://localhost:6190/adminapi/v1/',
    adminWritable: true,
    hideInternalDescLinks: false,
    hideInternalImages: false,
    startDataMode: DataMode.BACKEND,
    availableDataModes: [DataMode.BACKEND]
};
