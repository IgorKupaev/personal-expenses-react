import React, { FC } from 'react';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import CustomTextField from '../CustomTextField/CustomTextField';
import styles from './Modal.module.scss';
import { IModalProps } from '../../types/propTypes/IModalProps';

const Modal: FC<IModalProps> = ({modal, setModal, modalInputs, setModalInputs, editItem}) => {
  return (
    <Dialog onClose={() => setModal(!modal)} open={modal}>
      <DialogContent>
      <DialogTitle>Изменить данные расходов</DialogTitle>
        <CustomTextField
          inputProps={{maxLength: 30}}
          defaultValue={modalInputs.place}
          onChange={e => setModalInputs({...modalInputs, place: e.currentTarget.value})}
          label="Куда было потрачено"
        />
        <CustomTextField
          defaultValue={modalInputs.cost}
          onChange={e => setModalInputs({...modalInputs, cost: Number(e.currentTarget.value)})}
          label="Сколько было потрачено"
          type="number"
          inputProps={{max: 99999, min: 0}}
        />
        <CustomTextField
          defaultValue={modalInputs.date}
          onChange={e => setModalInputs({...modalInputs, date: e.currentTarget.value})}
          type="date"
          label="Когда было потрачено"
        />
        <Button
          onClick={editItem}
          className={styles.button}
          color='success'
          variant="contained"
        >
          Изменить
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default Modal;