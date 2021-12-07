import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileStateLoading {
  name: null;
  phoneNumber: null;
  district: null;
  fullAddress: null;
  points: number;
  loading: true;
}

interface ProfileStateLoaded {
  name: string;
  phoneNumber: string | null;
  district: string | null;
  fullAddress: string | null;
  points: number;
  loading: false;
}

export type ProfileState = ProfileStateLoading | ProfileStateLoaded;

const ProfileInitialState = {
  name: null,
  phoneNumber: null,
  district: null,
  fullAddress: null,
  points: 0,
  loading: true,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: ProfileInitialState as ProfileState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Omit<ProfileState, 'loading'>>) => {
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.district = action.payload.district;
      state.fullAddress = action.payload.fullAddress;
      state.points = action.payload.points;
      state.loading = false;
    },
  },
});

export const { updateProfile } = ProfileSlice.actions;

export default ProfileSlice;
