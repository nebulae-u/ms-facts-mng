import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import * as Yup from "yup";
import _ from "@lodash";
import InputText from "../../components/TextField";
import { FuseLoading } from "@fuse";

export function basicInfoFormValidationsGenerator(T) {
  return {
    name: Yup.string()
      .min(
        3,
        T.translate("shark_attack.form_validations.name.length", { len: 3 })
      )
      .required(T.translate("shark_attack.form_validations.name.required")),
  };
}

/**
 * Aggregate BasicInfo form
 * @param {{dataSource,T}} props
 */
export function BasicInfo(props) {
  const {
    dataSource: form,
    T,
    onChange,
    errors,
    touched,
    canWrite,
    readSharkAttackDetailsResult,
  } = props;
  const { data, loading, called } = readSharkAttackDetailsResult;

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:mr-10">
          <InputText
            label={T.translate("shark_attack.date")}
            name="date"
            value={form.date}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.year")}
            name="year"
            value={form.year}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.type")}
            name="type"
            value={form.type}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.country")}
            name="country"
            value={form.country}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.area")}
            name="area"
            value={form.area}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.location")}
            name="location"
            value={form.location}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.activity")}
            name="activity"
            value={form.activity}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.name")}
            name="name"
            value={form.name}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.sex")}
            name="sex"
            value={form.sex}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />
          <InputText
            label={T.translate("shark_attack.age")}
            name="age"
            value={form.age}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />
        </div>
        <div className="w-full md:w-1/2">
          <InputText
            label={T.translate("shark_attack.injury")}
            name="injury"
            value={form.injury}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.fatal_y_n")}
            name="fatal_y_n"
            value={form.fatal_y_n}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.time")}
            name="time"
            value={form.time}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.species")}
            name="species"
            value={form.species}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.investigator_or_source")}
            name="investigator_or_source"
            value={form.investigator_or_source}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.pdf")}
            name="pdf"
            value={form.pdf}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.href_formula")}
            name="href_formula"
            value={form.href_formula}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.href")}
            name="href"
            value={form.href}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.case_number")}
            name="case_number"
            value={form.case_number}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <InputText
            label={T.translate("shark_attack.case_number0")}
            name="case_number0"
            value={form.case_number0}
            touched={touched}
            onChange={onChange}
            errors={errors}
            canWrite={canWrite}
          />

          <FormControlLabel
            control={
              <Switch
                checked={form.active}
                onChange={onChange("active")}
                id="active"
                name="active"
                value={form.active}
                inputProps={{ "aria-label": "primary checkbox" }}
                variant="outlined"
                disabled={!canWrite()}
              />
            }
            label={T.translate("shark_attack.active")}
          />
        </div>
      </div>
      <div className="flex">
        {loading && <FuseLoading />}
        {called && <div>{JSON.stringify(data, null, 2)}</div>}
      </div>
    </>
  );
}
