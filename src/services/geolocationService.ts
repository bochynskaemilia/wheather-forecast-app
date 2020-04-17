import { IProcessedGeoposition } from '../types/geolocationTypes';

const processData = ({ Key }: { Key: string }): IProcessedGeoposition => ({ userLocationKey: Key });

export default {
  processData,
};
