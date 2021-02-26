import {useState} from "react";
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {useForm,Controller} from "react-hook-form";
import InputMask from 'react-input-mask';

const URL = 'http://viacep.com.br/ws/'

const FormComponent = () => {
    const [state, setState] = useState({id:0, data:{}})

    const { register, handleSubmit, watch, errors, setValue, control } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://127.0.0.1:8000/Cliente/`, {
            method:'POST', body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).
        then(r => r.json()).then(r => {
            console.log(r)
        })
    }

    const PesquisarCep = (cep) =>{
        fetch(`${URL}${cep}/json`).
        then(r => r.json()).then(r => {
            console.log(state)
            setState({...state, data: r})
            setValue('localidade', r.localidade)
        })
    }

    return (
        <Paper>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        error={!!errors['name']}
                        helperText={errors['nome']?.message}
                        inputRef={register({ required: { value: true, message: "campo obrigatorio" }, maxLength: 8})}
                        label="Nome"
                        name={'name'}
                    />
                </Grid>
            <Grid item>
                <TextField
                    name={'phone'}
                    label="Telefone"
                    inputRef={register}
                />
            </Grid>
                <Grid item>
                <TextField
                    name={'email'}
                    label="Email"
                    inputRef={register}
                />
            </Grid>
            </Grid>
                <Grid item>
                <TextField
                    name={'cnpj'}
                    label="CNPJ"
                    inputRef={register}
                />
            </Grid>
            {/*<Grid item>*/}
            {/*    <TextField*/}
            {/*        name={'cn'}*/}
            {/*        label="CPF"*/}
            {/*        inputRef={register}*/}
            {/*    />*/}
            {/*</Grid>*/}
                <Grid>
                    <Controller
                        as={
                            // <CustomInputMask field={field} errors={errors} />
                            <InputMask mask={'999.999.999-99'} >
                                {() => (
                                    <TextField
                                        error={!!errors['cpf']}
                                        name={'cpf'}
                                        label={'CPF'}
                                        helperText={errors['cpf']?.message}
                                    />
                                )}
                            </InputMask>
                        }
                        control={control}
                        name={'cpf'}
                    />
                </Grid>
                <Grid item>
                    <Button color="secondary" variant={'contained'} type={'submit'}>Enviar</Button>
                </Grid>
            </form>
        </Paper>
    )
}
export default FormComponent