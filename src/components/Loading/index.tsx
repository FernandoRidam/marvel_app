import { SpinnerGap } from '@phosphor-icons/react';
import { LoadView, Spin } from './styles';

export const Loading = () => {
  return (
    <LoadView>
      <Spin>
        <SpinnerGap
          size={ 64 }
        />
      </Spin>
    </LoadView>
  );
};
