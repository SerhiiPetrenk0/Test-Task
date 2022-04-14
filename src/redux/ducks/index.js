import { workerSagaFillUser } from './userInfoDuck';
import { workerSagaGETProducts, workerSagaGETComments, workerSagaPOSTComments } from './productsDuck';

export {
    workerSagaFillUser as SagaFillUser,
    workerSagaGETProducts as SagaGETProducts,
    workerSagaGETComments as SagaGETComments,
    workerSagaPOSTComments as SagaPOSTComments
};
