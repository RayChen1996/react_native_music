import * as React from 'react';
import { FlatList, Image, View } from 'react-native';

import { Music, Heart, Download, CircleUser, Search, Play, Ellipsis } from 'lucide-react-native';

import { Text } from '~/components/ui/text';

export default function Screen() {
  const popular = [
    {
      id: 'asd',
      name: 'sss',
    },
    {
      id: 'dsf',
      name: '',
    },
    {
      id: 'fdgfdg',
      name: 'dfgfdr',
    },
  ];

  function generateFakeObjectId() {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16); // 用時間戳的前 8 個字元
    const randomChars = 'xxxxxxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)); // 隨機 8 個字元
    const machineId = 'xxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)); // 模擬 machine ID 的 4 個字元
    const processId = 'xxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)); // 模擬 process ID 的 4 個字元
    const counter = 'xxxxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)); // 最後 6 個字元的遞增 counter
    return timestamp + randomChars + machineId + processId + counter;
  }

  const songNames = [
    'Senorita',
    'Sunflower',
    '2002',
    'Blinding Lights',
    'Levitating',
    'Save Your Tears',
    'Dance Monkey',
    'Don’t Start Now',
    'Bad Guy',
    'Shape of You',
    'Perfect',
    'Despacito',
    'Closer',
    'Rockstar',
    'Someone You Loved',
    'Lucid Dreams',
    'God’s Plan',
    'Shallow',
    'Old Town Road',
    'Memories',
  ];
  const songs = Array.from({ length: songNames.length }, (_, i) => ({
    id: generateFakeObjectId(),
    name: songNames[i],
  }));
  return (
    <View className='flex-1 justify-center items-center px-5 relative  bg-white '>
      <View className='py-6 w-full flex flex-row justify-between items-center '>
        <Text className=' text-5xl font-extrabold text-[#656262]'>Discover</Text>
        <Search size={ICON_SIZE} color={'#656262'} />
      </View>
      <View className='flex-1 w-full'>
        <Text className=' text-black/80 font-bold text-3xl mb-4'>Popcular This Month</Text>

        <FlatList
          data={popular}
          horizontal
          contentContainerStyle={{ paddingBottom: 150 }}
          renderItem={({ item }) => {
            return (
              <View key={item.id} className='w-60 bg-gray-400 h-60 mx-2 p-5  rounded-3xl flex '>
                <View className='flex-1' />
                <Text className='font-semibold text-2xl'>Alone</Text>
                <Text className='font-semibold'>Marshmello</Text>
                <View className=' mt-2'>
                  <View className='rounded-full  bg-white w-20 h-20 justify-center  items-center '>
                    <Play size={ICON_SIZE} color={'black'} fill={'black'} />
                  </View>
                  <View className='bg-white/50 rounded-3xl'></View>
                </View>
              </View>
            );
          }}
        />

        <Text className=' text-black/80 font-bold text-3xl mt-5'>Top Songs</Text>
        <FlatList
          data={songs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View
                key={item.id}
                className=' text-black h-40 mx-2 p-5 mb-3 flex-row rounded-3xl flex  justify-between '
              >
                <View className=' w-1/3 h-full'>
                  <View className='rounded-3xl overflow-hidden'>
                    <Image
                      alt=''
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20, // Rounded corners
                      }}
                      resizeMode='cover' // Ensures the image covers the view
                      source={{
                        uri: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      }}
                    />
                  </View>
                </View>
                <View className=' justify-center items-center'>
                  <Text className='font-semibold text-black text-2xl'>{item.name}</Text>
                  <Text className='font-semibold text-black'>Marshmello</Text>
                </View>
                <View className=' w-1/3 h-full justify-center  items-end'>
                  <Ellipsis size={ICON_SIZE} color={'#312D2D'} />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View className=' px-11  gap-14 py-6 bg-[#312D2D] rounded-full w-full absolute   bottom-10 flex flex-row justify-around items-center  '>
        <Music size={ICON_SIZE} color={'#fff'} />
        <Heart size={ICON_SIZE} color={'#fff'} />
        <Download size={ICON_SIZE} color={'#fff'} />
        <CircleUser size={ICON_SIZE} color={'#fff'} />
      </View>
    </View>
  );
}

const ICON_SIZE = 45;
