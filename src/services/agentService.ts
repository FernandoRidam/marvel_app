import {
  api,
} from '../config/api';

import {
  Response,
  ResponseArray,
} from '../@types/service';

import {
  Agent,
} from '../@types/agent';

export const getAgents = async ( search: string, page: number, limit: number = 10 ): Promise<ResponseArray<Agent>> => {
  const offset = limit * ( page - 1 );

  const params: any = {
    limit,
    offset,
  };

  if( search ) {
    params.nameStartsWith = search;
  }

  try {
    const {
      data: {
        data: {
          total,
          results,
        },
      },
    } = await api.get('/characters', {
      params,
    });

    return {
      success: true,
      message: '',
      result: {
        total,
        data: results.map(( item: any ): Agent => item as Agent ),
      },
    };
  } catch (error) {
    return {
      success: false,
      message: String( error ),
      result: null,
    };
  }
};

export const getAgent = async ( id: number ): Promise<Response<Agent>> => {
  try {
    const {
      data: {
        data: {
          results,
        },
      },
    } = await api.get(`/characters/${ id }`);

    return {
      success: true,
      message: '',
      result: results[ 0 ],
    };
  } catch (error) {
    return {
      success: false,
      message: String( error ),
      result: null,
    };
  }
};
