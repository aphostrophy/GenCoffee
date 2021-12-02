import { useState, useEffect } from 'react';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export function useFirebaseDataSource<T>(
  getResourceFunc: () => Promise<FirebaseFirestoreTypes.QuerySnapshot>,
): T[] | null {
  const [resource, setResource] = useState<null | T[]>(null);

  useEffect(() => {
    (async () => {
      const snapshot = await getResourceFunc();
      const result: T[] = snapshot.docs.map(data => data.data() as T);
      setResource(result);
    })();
  }, [getResourceFunc]);

  return resource;
}
