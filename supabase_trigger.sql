-- Création de la fonction de contrôle
CREATE OR REPLACE FUNCTION check_profile_update_limit()
RETURNS TRIGGER AS $$
BEGIN
  -- Si le nom d'utilisateur ou l'avatar change
  IF (NEW.username <> OLD.username OR NEW.avatar_url <> OLD.avatar_url) THEN
    
    -- Si on est un nouveau mois, on reset le compteur
    IF (EXTRACT(MONTH FROM OLD.last_update_reset) <> EXTRACT(MONTH FROM CURRENT_TIMESTAMP)) THEN
      NEW.update_count := 1;
      NEW.last_update_reset := CURRENT_TIMESTAMP;
    ELSE
      -- Sinon, on vérifie la limite de 3
      IF (OLD.update_count >= 3) THEN
        RAISE EXCEPTION 'Limite de 3 changements par mois atteinte pour N\'ZASSA.';
      END IF;
      NEW.update_count := OLD.update_count + 1;
    END IF;

  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Activation du Trigger
CREATE TRIGGER enforce_profile_limit
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION check_profile_update_limit();
